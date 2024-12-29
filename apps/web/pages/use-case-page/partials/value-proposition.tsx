import { StaticImageData } from 'next/image';

interface Props {
  items: {
    title: string;
    description: string;
    icon: StaticImageData;
  }[];
}

export function ValueProposition({ items }: Props) {
  return (
    <div className="container">
      <div className="lg:pt-12 pb-12 lg:pb-32">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-24">
          {items.map((item, index) => (
            <div key={index} className="border-l border-dashed border-bunker-300 pl-9 py-6">
              <img
                src={item.icon.src}
                alt={item.title}
                className="h-15 mb-3"
              />
              <h2 className="text-[1.5rem] font-medium font-serif leading-[2.5rem]">
                {item.title}
              </h2>
              <p className="text-[1.125rem] text-bunker-700 leading-[1.75rem] font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
