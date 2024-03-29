import api from "@/oneentry";

export const fetchMenuItems = async (marker: string) => {
  try {
    const menus = await api.Menus.getMenusByMarker(marker);
    return menus;
  } catch (error) {
    console.log("Error while fetching menu items: ", error);
    throw new Error("Failed to fetch menu items!");
  }
};

export const fetchAllForms = async () => {
  try {
    const formsData = await api.Forms.getAllForms();

    const forms = Object.values(formsData)
      .map((form) => form)
      .sort((a, b) => b.position - a.position);
    return forms;
  } catch (error) {
    console.log("Error while fetching all forms: ", error);
    throw new Error("Failed to fetch all forms!");
  }
};

export const fetchFormById = async (id: string) => {
  try {
    const formData = await api.Forms.getFormByMarker(id);

    return formData;
  } catch (error) {
    console.log("Error while fetching form data: ", error);
    throw new Error("Failed to fetch form data!");
  }
};

export const fetchAllFormsData = async () => {
  try {
    const formsData = await api.FormData.getFormsData();

    return formsData;
  } catch (error) {
    console.log("Error while fetching all forms data: ", error);
    throw new Error("Failed to fetch all forms data!");
  }
};
