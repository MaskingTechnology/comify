
import React, { useState, useEffect } from 'react';

import './Selection.css';

export type SelectionProps = {
    defaultText?: string;
    optionsList: SelectionOptions[];
};

export type SelectionOptions = {
    id: number;
    name: string;
};

export default function Selection(props: SelectionProps)
{
    const optionsList = props.optionsList;
    const defaultText = props.defaultText ?? optionsList[0].name;

    const [showOptionsList, setShowOptionsList] = useState(false);
    const [defaultSelectText, setDefaultSelectText] = useState(defaultText);

    const handleClickOutside = (event: React.MouseEvent) =>
    {
        if (event === undefined)
        {
            return;
        }

        event.preventDefault();

        const target = event.target as HTMLElement;

        if (!target.classList.contains("ds-selection-option") && !target.classList.contains("ds-selection-text"))
        {
            setShowOptionsList(false);
        }
    };

    const toggleListDisplay = () =>
    {
        setShowOptionsList(!showOptionsList);
    };

    const handleOptionClick = (event: React.MouseEvent) =>
    {
        const target = event.target as HTMLElement;
        const selectedText = target.getAttribute("data-name") ?? defaultText;

        setDefaultSelectText(selectedText);
        setShowOptionsList(false);
    };

    useEffect(() =>
    {
        document.addEventListener("mousedown", () => handleClickOutside);

        setDefaultSelectText(defaultSelectText);

        return () =>
        {
            document.removeEventListener("mousedown", () => handleClickOutside);
        };
    }, [defaultSelectText, handleClickOutside]);


    return (
        <div className="ds-selection">
            <div
                className={showOptionsList ? "ds-selection-text active" : "ds-selection-text"}
                onClick={toggleListDisplay}
            >
                {defaultSelectText}
            </div>
            {showOptionsList && (
                <div className="ds-selection-options">
                    {optionsList.map(option =>
                    {
                        return (
                            <div
                                className="ds-selection-option"
                                data-name={option.name}
                                key={option.id}
                                onClick={handleOptionClick}
                            >
                                {option.name}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
