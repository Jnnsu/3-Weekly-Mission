import { API } from '../constant';

export const getUserSample = async () => {
  try {
    const response = await fetch(API.USER_SAMPLE);
    const result = await response.json();

    const formattedData = {
      ...result,
      image_source: result.profileImageSource,
    };

    return formattedData;
  } catch (error) {
    return `Error: ${error}`;
  }
};

export const getFolderSample = async () => {
  try {
    const response = await fetch(API.FOLDER_SAMPLE);
    const result = await response.json();

    const formattedData = result.folder.links.map(link => ({
      ...link,
      created_at: link.createdAt,
      image_source: link.imageSource,
    }));

    const sampleFolderResult = {
      ...result.folder,
      links: formattedData,
    };
    return sampleFolderResult;
  } catch (error) {
    return `Error: ${error}`;
  }
};

export const getUser = async () => {
  try {
    const response = await fetch(API.USER);
    const result = await response.json();
    return result;
  } catch (error) {
    return `Error: ${error}`;
  }
};

export const getFolder = async () => {
  try {
    const response = await fetch(API.USER_FOLDERS);
    const result = await response.json();
    return result;
  } catch (error) {
    return `Error: ${error}`;
  }
};

export const getFolderItem = async folderId => {
  try {
    const response = await fetch(
      folderId === 'all'
        ? API.USER_LINKS
        : `${API.USER_LINKS}?folderId=${folderId}`,
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(`Error: ${error}`);
    return [];
  }
};
