
import React, { useState } from 'react';
import './Dropdown.css';

export type Props = {
    readonly options: Map<string, string>;
    readonly selected?: string; // Key of the selected option
    readonly onChange?: (oldKey: string, newKey: string) => void;
};

export default function Component({ options, selected, onChange }: Props)
{
    const defaultKey = selected ?? [...options.keys()][0];
    const defaultText = options.get(defaultKey) ?? '';

    const [selectedKey, setSelectedKey] = useState(defaultKey);
    const [selectedText, setSelectedText] = useState(defaultText);
    const [showOptions, setShowOptions] = useState(false);

    const toggleOptions = () =>
    {
        setShowOptions(!showOptions);
    };

    const handleOptionClick = (event: React.MouseEvent) =>
    {
        const target = event.target as HTMLElement;

        const oldKey = selectedKey;
        const newKey = target.getAttribute('data-key') ?? defaultKey;
        const newText = options.get(newKey) ?? defaultText;

        setSelectedKey(newKey);
        setSelectedText(newText);
        setShowOptions(false);

        if (onChange)
        {
            onChange(oldKey, newKey);
        }
    };

    return (
        <div className='selection'>
            <div className={showOptions ? 'text active' : 'text'} onClick={toggleOptions}>
                {selectedText}
            </div>
            {showOptions && (
                <div className='options'>
                    {
                        Array.from(options).map(([key, value]) =>
                        {
                            return (
                                <div className='option' data-key={key} key={key} onClick={handleOptionClick}>
                                    {value}
                                </div>
                            );
                        })
                    }
                </div>
            )}
        </div>
    );
}
