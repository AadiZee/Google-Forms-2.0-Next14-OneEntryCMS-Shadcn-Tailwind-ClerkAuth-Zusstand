import { fetchAllFormsData } from "@/lib/data";
import { getResponses } from "@/lib/utils";
import { IFormsEntity } from "oneentry/dist/forms/formsInterfaces";
import React from "react";
import FormTabs from "./FormTabs";

const FormPageHeaderBottom = async ({ form }: { form: IFormsEntity }) => {
  const formsData = await fetchAllFormsData();
  const responses = getResponses(formsData, form.identifier);

  return <FormTabs form={form} responses={responses.length} />;
};

export default FormPageHeaderBottom;
