import { type IFormContent } from "@/ts/interface";

export function filterUsingSearchType(data: IFormContent[], search: string){
  return data.filter((content: IFormContent) => {
    const titleUpperCase = content.title.toUpperCase();
    return titleUpperCase.includes(search);
  })
}

export function filterUsingFilterType(data: IFormContent[], filter: string){
  return filter === 'allcontent' 
    ? data 
    : data.filter((content: IFormContent) => content.type === filter.toUpperCase());
}