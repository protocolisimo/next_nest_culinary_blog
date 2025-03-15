import React from 'react'
import LogoFullIcon from '../../../../public/assets/img/logoFull.svg'
import LogoIcon from '../../../../public/assets/img/Logo.svg'
import Image from 'next/image';


export type LogoPropType = {
    full?: boolean;
};


export default function Logo({ full = false }: LogoPropType) {
    console.log(full);


    const getLogo = (full: boolean) => {
        if (full) {
            return <Image src={LogoFullIcon} alt='logo' />
        } else {
            return <Image src={LogoIcon} alt='logo' />
        }
    }

    return getLogo(full)
}
