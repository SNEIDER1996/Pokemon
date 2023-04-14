import NextLink from "next/link";
import { Link, Spacer, Text, useTheme } from "@nextui-org/react"
import Image from "next/image";


export const Navbar = () => {

  const { theme } = useTheme();

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0 20px',
      backgroundColor: theme?.colors.gray900.value
    }}>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        alt="icono de la aplicacion"
        width={70}
        height={70}
      />
      <NextLink href="/" passHref>
        <Text color="white" h2>Pokemon</Text>
      </NextLink>

      <Spacer css={{ flex: 1 }} />
      <NextLink href="/favorites" passHref>
        <Text color="white">Favoritos</Text>
      </NextLink>
    </div>
  )
}
