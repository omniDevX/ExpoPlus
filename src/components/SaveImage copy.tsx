import { Directory, File, Paths } from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';

export async function saveImage(url: string) {
    console.log('Saving image from URL:', url);

    // Save locally (your working logic)
    const folder = new Directory(Paths.cache, 'AsianBeautyGallery');
    if (!folder.exists) await folder.create();
    const filename = `img_${Date.now()}.jpg`;
    const file = new File(folder, filename);

    try {
        const output = await File.downloadFileAsync(url, file);
        console.log('✅ Image saved locally:', output.uri);

        // ✅ Write-only save (no permission request)
        await MediaLibrary.saveToLibraryAsync(output.uri);
        console.log('🎉 Saved to Gallery (no READ_MEDIA permission requested)');

        return output.uri;
    } catch (error) {
        console.error('Save image error:', error);
        throw error;
    }
}
