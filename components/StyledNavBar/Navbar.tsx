import { MobileNav } from "./MobileNav";
import { NavLink } from "./NavLink";
import { useState } from 'react';
import styled, {css} from 'styled-components';

type BackgroundColour = 'bg-slate-300'|'bg-orange-600'|'bg-green-500';
type TextColour =  'text-black'|'text-red-200';


export type NavBarProps = {
    bgColour: BackgroundColour;
    textColour: TextColour;
}

const baseSpan = css`
background-color: rgb(0 0 0);
height: 0.25rem; /* 4px */
width: 100%;
border-radius: 0.5rem; /* 8px */
transition-property: transform;
transition-duration: 300ms;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`
const top = css`
transform: ${props => props.open && "translateY(0.875rem) rotate(45deg)"};
`;

const middle = css`
width: ${props => props.open ? "0%": "100%"};
`;

const bottom = css`
transform: ${props => props.open && "translateY(-0.875rem) rotate(-45deg)"};
`;

const TopSpan = styled.span`
${baseSpan}
${top}
`

const MidSpan = styled.span`
${baseSpan}
${middle}
`

const BottomSpan = styled.span`
${baseSpan}
${bottom}
`

export default function Navbar({bgColour, textColour}:NavBarProps) {
    const [open, setOpen] = useState(false);
    
    return (
        <nav className={`z-30 flex filter drop-shadow-md px-4 py-4 h-20 items-center + ${bgColour}`}>
            <MobileNav open={open} setOpen={setOpen} bgColour={bgColour} textColour={textColour}/>
            <div className="w-3/12 flex items-center">
                <a className={`text-2xl font-semibold + ${textColour}`} href="/">LOGO</a>
            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <TopSpan open={open} />
                    <MidSpan open={open} />
                    <BottomSpan open={open} />
                </div>

                <div className="hidden md:flex">
                    <NavLink to="/contact" textColour={textColour} >
                        CONTACT
                    </NavLink>
                    <NavLink to="/about" textColour={textColour}>
                        ABOUT
                    </NavLink>
                </div>
            </div>
        </nav>
        
    )
  }