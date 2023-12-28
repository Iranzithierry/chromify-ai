import { ExternalLink } from '@/components/ui/external-link'

export default function Footer() {
  return (
    <div className="w-full py-5 text-center">
      <p className="text-gray-500">
        A project by{" "}
        <ExternalLink href='#'>
          IRANZI Dev
        </ExternalLink>
      </p>
      <a href="https://www.buymeacoffee.com/iranzithierry" target="_blank" rel="noopener noreferrer" className="mx-auto mt-2 flex max-w-fit items-center justify-center rounded-lgtransition-all duration-75 hover:scale-105">
        <img className='h-10' src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=iranzithierry&button_colour=0069ff&font_colour=ffffff&font_family=Inter&outline_colour=ffffff&coffee_colour=FFDD00" />
      </a>
    </div>
  );
}
