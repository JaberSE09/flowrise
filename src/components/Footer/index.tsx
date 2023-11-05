import { createClient } from '@/prismicio';
import Link from 'next/link';
import { PrismicNextLink } from "@prismicio/next";

const Footer  = async () => {
   
  
    const client = createClient();

    const settings = await client.getSingle("settings");
  return (
   <footer>
      <Link href={"/"}>{settings.data.site_title}</Link>
      <p>{settings.data.site_title} Copyright &copy; {new Date().getFullYear()} Sajid Jaber</p>
      <ul> 
          {settings.data.navigation.map(({ label, link }) => (
            <li key={label}>
              <PrismicNextLink field={link}>{label}</PrismicNextLink>
            </li>
          ))}
        </ul>
   </footer>
  )
}

export default Footer
