/**
 * OCR Navigation Helper
 * 
 * Example usage in any screen:
 * 
 * import { navigateToOCRTest } from '../utils/ocrNavigation';
 * 
 * <TouchableOpacity onPress={() => navigateToOCRTest(navigation)}>
 *   <Text>Test OCR</Text>
 * </TouchableOpacity>
 */

export const OCR_SCREEN_NAME = 'OCRTestScreen';

/**
 * Navigate to OCR Test Screen
 * @param navigation - React Navigation object
 */
export function navigateToOCRTest(navigation: any): void {
  if (navigation && typeof navigation.navigate === 'function') {
    navigation.navigate(OCR_SCREEN_NAME);
  } else {
    console.error('Invalid navigation object passed to navigateToOCRTest');
  }
}
