import React from "react";
import { Summary } from "./Summary";

import "./Summary.stories.scss";

export default {
    title: "Summary",
    component: Summary,
    argTypes: {
        numItems: {
            name: "number of items",
            defaultValue: 4,
            control: {
                type: "number",
                min: 1,
                max: 7,
                step: 1,
            },
        },
        containerWidth: {
            name: "container width",
            defaultValue: "100%",
            control: {
                type: "inline-radio",
                options: ["200px", "350px", "600px", "790px", "1000px", "100%"],
            },
        },
        labelLength: {
            name: "label length",
            defaultValue: "medium",
            control: {
                type: "inline-radio",
                options: ["medium", "large", "extra large"],
            },
        },
        valueLength: {
            name: "value length",
            defaultValue: "medium",
            control: {
                type: "inline-radio",
                options: ["medium", "large", "extra large"],
            },
        },
        outlines: {
            name: "outlines",
            defaultValue: false,
            control: "boolean",
        },
    },
};

const createData = (numItems, labelLength, valueLength) => {
    const items = Array(numItems).fill(0);
    const lengths = {
        medium: { label: "Average label", value: "Average value" },
        large: { label: "Extra long key here", value: "Extra long value here" },
        "extra large": {
            label: "A Super long label here bro",
            value: "A super duper long value here bro",
        },
    };
    return items.map((item) => {
        return {
            label: lengths[labelLength].label,
            value: lengths[valueLength].value,
        };
    });
};

const Template = ({
    numItems,
    containerWidth,
    labelLength,
    valueLength,
    outlines,
}) => {
    const items = createData(numItems, labelLength, valueLength);
    const className = `summary-template${
        outlines ? " summary-template--with-outlines" : ""
    }`;
    return (
        <div
            className={className}
            style={{
                width: containerWidth,
            }}
        >
            <Summary items={items} />
        </div>
    );
};

export const Display = Template.bind({});
