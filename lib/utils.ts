import { type ClassValue, clsx } from "clsx";
import { IFormsDataEntity } from "oneentry/dist/formsData/formsDataInterfaces";
import { twMerge } from "tailwind-merge";
import { AttributeCount, FormDataItem } from "./definitions";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getResponses(formsData: IFormsDataEntity[], id: string) {
  return Object.values(formsData).filter(
    (formData) => formData.formIdentifier === id
  );
}

export function getNumberOfResponses(
  responses: IFormsDataEntity[],
  marker: string
) {
  const attributeCounts = responses
    .flatMap((response) =>
      response.formData
        // @ts-ignore
        .filter((item: FormDataItem) => item.value !== "")
        .map((item: FormDataItem) => item.marker)
    )
    .reduce((counts, attribute) => {
      counts[attribute] = (counts[attribute] || 0) + 1;
      return counts;
    }, {}) as AttributeCount;

  return attributeCounts[marker] || 0;
}

export function getIndividualResponses(
  responses: IFormsDataEntity[],
  marker: string
) {
  const items = responses.flatMap((response) => {
    const formData = response.formData;
    // @ts-ignore
    const attribute = formData.find(
      (item: FormDataItem) => item.marker === marker
    );

    if (!attribute?.value) return [];

    return {
      ...attribute,
    } as FormDataItem;
  });

  const groupedItems = items.reduce((counts, item) => {
    if (!item.value) return counts;

    // @ts-ignore
    counts[item.value] = (counts[item.value] || 0) + 1;
    return counts;
  }, {}) as AttributeCount;

  return Object.entries(groupedItems).map(([value, count]) => ({
    value,
    count,
    marker,
  }));
}
