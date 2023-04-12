import { motion } from "framer-motion"
import { forwardRef } from "react"
import { useThemeColor } from "renderer/hooks/use-theme-color.hook"
import { BsmIcon } from "../svgs/bsm-icon.component"

type Props = {
    className?: string,
    title?: string,
    linked?: boolean
    disabled?: boolean,
    onClick?: () => void
}

export const LinkButton = motion(forwardRef((props: Props, ref) => {

    const color = useThemeColor("first-color");

    const linkedColor = (() => {
        if(props.disabled){ return "orange"; }
        if(props.linked){ return color; }
        return "red";
    })()

    return (
        <div ref={ref} className={props.className} title={props.title} onClick={e => {e.preventDefault(); !props.disabled && props.onClick?.()}} style={{pointerEvents: props.disabled ? "none" : "auto"}}>
            <span className="absolute top-0 left-0 h-full w-full rounded-full brightness-50 opacity-75 dark:opacity-20 dark:filter-none" style={{backgroundColor: linkedColor}}/>
            <BsmIcon className="p-1 absolute top-0 left-0 h-full w-full !bg-transparent -rotate-45 brightness-150" icon={props.linked ? "link" : "unlink"} style={{color: linkedColor}} />
        </div>
    )
}))