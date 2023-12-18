
import React, { useState, useEffect } from 'react';

import './Selection.css';

export type SelectionProps = {
    defaultText: string;
    optionsList: SelectionOptions[];
};

export type SelectionOptions = {
    id: number;
    name: string;
};

export default function Selection(props: SelectionProps)
{
    const [showOptionsList, setShowOptionsList] = useState(false);
    const [defaultSelectText, setDefaultSelectText] = useState(props.defaultText);

    const optionsList = props.optionsList;

    const handleClickOutside = (event: React.MouseEvent) =>
    {
        console.log('handleClickOutside');

        if (event === undefined)
        {
            console.log('event undefined');

            return;
        }

        const target = event.target as HTMLElement;

        if (!target.classList.contains("custom-select-option") && !target.classList.contains("selected-text"))
        {
            setShowOptionsList(false);
        }
    };

    const handleListDisplay = () =>
    {
        setShowOptionsList(!showOptionsList);
    };

    const handleOptionClick = (event: React.MouseEvent) =>
    {
        const target = event.target as HTMLElement;
        const selectedText = target.getAttribute("data-name") ?? props.defaultText;
        console.log('selectedText', selectedText);

        setDefaultSelectText(selectedText);
        setShowOptionsList(false);
    };

    useEffect(() =>
    {
        console.log('mount');
        document.addEventListener("mousedown", () => handleClickOutside);

        console.log('use effect', defaultSelectText);

        setDefaultSelectText(defaultSelectText);

        return () =>
        {
            console.log('unmount');
            document.removeEventListener("mousedown", () => handleClickOutside);
        };
    }, [defaultSelectText]);


    return (
        <div className="ds-selection">
            <div
                className={showOptionsList ? "ds-selection-text active" : "ds-selection-text"}
                onClick={handleListDisplay}
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
