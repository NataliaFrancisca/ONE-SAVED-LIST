import { type IUserResource } from "@/ts/interface";

export function filterUsingSearchType(data: IUserResource[], search: string){
  return data.filter((content: IUserResource) => {
    const titleUpperCase = content.title.toUpperCase();
    return titleUpperCase.includes(search);
  })
}

export function filterUsingFilterType(data: IUserResource[], filter: string){
  return filter === 'allcontent' 
    ? data 
    : data.filter((content: IUserResource) => content.type === filter.toUpperCase());
}