
import React, { useState } from 'react';
import './Dropdown.css';

export type Props = {
    options: Map<string, string>;
    selected?: string; // Key of the selected option
    changeHandler?: (oldKey: string, newKey: string) => void;
};

export default function Component({ options, selected, changeHandler }: Props)
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

        if (changeHandler)
        {
            changeHandler(oldKey, newKey);
        }
    };

    return (
        <div className='ds-selection'>
            <div className={showOptions ? 'ds-selection-text ds-selection-active' : 'ds-selection-text'} onClick={toggleOptions}>
                {selectedText}
            </div>
            {showOptions && (
                <div className='ds-selection-options'>
                    {
                        Array.from(options).map(([key, value]) =>
                        {
                            return (
                                <div className='ds-selection-option' data-key={key} key={key} onClick={handleOptionClick}>
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
