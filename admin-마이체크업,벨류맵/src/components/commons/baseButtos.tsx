import cn from 'classnames';

interface Props {
    className ?: string;
    text ?: string;
}
export default function BaseButtons({className,text} : Props){
    return (
        <button className={cn('base-button',className)}>
            {text}
        </button>
    )
}
