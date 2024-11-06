import { ReactElement,Children } from "react"

type EachUtilsProps<T> = {
  of: T[],
  render: (item:T,index:number)=>any,
  noData?: ReactElement
}

export default function EachUtils<T>(
  {of,render,noData}:EachUtilsProps<T>) {
  if(noData&&of.length==0) return noData;
  return Children.toArray(of.map((item,index)=>render(item,index)))
}
