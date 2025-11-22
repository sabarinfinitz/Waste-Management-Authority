import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Use the same base URL as the existing API
const BASE_URL = "http://172.16.27.205:4000/api";

export interface OcrWeightData {
  weight: number;
  imageUri: string;
  timestamp: string;
  rawOcrText?: string;
}

export interface OcrSubmissionResponse {
  success: boolean;
  message?: string;
  data?: any;
}

/**
 * Submit OCR weight data to the backend
 * @param data - OCR weight data to submit
 * @returns API response
 */
export async function submitOcrWeight(
  data: OcrWeightData
): Promise<OcrSubmissionResponse> {
  try {
    // Get auth token if available
    const token = await AsyncStorage.getItem("token");

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const response = await axios.post(
      `${BASE_URL}/ocr/weight`,
      {
        weight: data.weight,
        imageUri: data.imageUri,
        timestamp: data.timestamp,
        rawOcrText: data.rawOcrText,
      },
      { headers }
    );

    return {
      success: true,
      data: response.data,
    };
  } catch (error: any) {
    console.error("Error submitting OCR weight:", error);
    return {
      success: false,
      message: error.response?.data?.message || error.message || "Failed to submit weight data",
    };
  }
}
