import { Folder, FolderLink, FolderSample, User } from '@/types/Common';
import { API } from '@/utils/constants';

export const getUserSample: () => Promise<User> = async () => {
  const result = await fetchData(API.USER_SAMPLE);
  return {
    ...result,
    image_source: result.profileImageSource ? result.profileImageSource : null,
  };
};

export const getFolderSample: () => Promise<FolderSample> = async () => {
  const result = await fetchData(API.FOLDER_SAMPLE);
  const formattedData: FolderLink[] = result.folder.links.map(
    (folderLink: FolderLink) => ({
      ...folderLink,
      created_at: folderLink.createdAt,
      image_source: folderLink.imageSource,
    }),
  );
  return {
    ...result.folder,
    links: formattedData,
  };
};

export const getUser: () => Promise<User> = async () => {
  const result = await fetchData(API.USER);
  return result?.data[0];
};

export const getFolders: () => Promise<Folder[]> = async () => {
  const result = await fetchData(API.FOLDER);
  return result?.data;
};

export const getFolderLinks: (
  folderId: number | string,
) => Promise<FolderLink[]> = async folderId => {
  const result = await fetchData(
    folderId === 'all'
      ? API.FOLDER_LINK
      : `${API.FOLDER_LINK}?folderId=${folderId}`,
  );
  return result?.data;
};

// data fetch 로직 분리
async function fetchData(url: string, options = {}) {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`API 호출 실패: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Fetch 에러: ${error}`);
    throw error;
  }
}
