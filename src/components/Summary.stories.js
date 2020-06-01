import React from "react";
import { Summary } from "./Summary";

export default {
    title: "Summary",
    component: Summary,
};

const Container = ({ width, children }) => {
    return (
        <div
            style={{
                width: width,
                border: "1px solid black",
                "box-sizing": "border-box",
            }}
        >
            {children}
        </div>
    );
};

const item = { label: "Average label", value: "Average value" };
const lKey = { label: "Extra long key here", value: "Average value" };
const lValue = { label: "Average label", value: "Extra long value here" };
const xlKey = { label: "A Super long label here bro", value: "Average value" };
const xlValue = {
    label: "Average label",
    value: "A super duper long value here bro",
};
const lBoth = { label: "Extra long key here", value: "Extra long value here" };
const xlBoth = {
    label: "A Super long label here bro",
    value: "A super duper long value here bro",
};

const test = (items, width) => {
    return () => (
        <Container width={width}>
            <Summary items={items} />
        </Container>
    );
};

export const XSContainerWithOneItem = test([item], "200px");
export const XSContainerWithLessItems = test([item, lBoth], "200px");
export const XSContainerWithSomeItems = test([item, lBoth, xlBoth], "200px");
export const XSContainerWithFiveItems = test(
    [item, lBoth, xlBoth, xlValue, lKey],
    "200px"
);

export const SContainerWithLessItems = test([item, xlKey], "350px");
export const SContainerWithSomeItems = test([item, lValue, xlBoth], "350px");
export const SContainerWithFiveItems = test(
    [item, lBoth, item, xlValue, lKey],
    "350px"
);
export const SContainerWithSixItems = test(
    [item, lBoth, xlBoth, xlValue, lKey, item],
    "350px"
);

export const MContainerWithLessItems = test([item, xlKey], "600px");
export const MContainerWithSomeItems = test([item, lValue, xlBoth], "600px");
export const MContainerWithFiveItems = test(
    [item, lBoth, item, xlValue, lKey],
    "600px"
);
export const MContainerWithSixItems = test(
    [item, lBoth, xlBoth, xlValue, lKey, item],
    "600px"
);

export const LContainerWithLessItems = test([item, xlKey], "790px");
export const LContainerWithSomeItems = test([item, lValue, xlBoth], "790px");
export const LContainerWithFiveItems = test(
    [item, lBoth, item, xlValue, lKey],
    "790px"
);
export const LContainerWithSixItems = test(
    [item, lBoth, xlBoth, xlValue, lKey, item],
    "790px"
);

export const XLContainerWithLessItems = test([item, xlKey], "1000px");
export const XLContainerWithSomeItems = test([item, lValue, xlBoth], "1000px");
export const XLContainerWithFiveItems = test(
    [item, lBoth, item, xlValue, lKey],
    "1000px"
);
export const XLContainerWithSixItems = test(
    [item, lBoth, xlBoth, xlValue, lKey, item],
    "1000px"
);
export const XLContainerWithSevenItems = test(
    [item, lBoth, xlBoth, item, xlValue, lKey, item],
    "1000px"
);

export const FullContainerWithLessItems = test([item, xlKey], "100%");
export const FullContainerWithSomeItems = test([item, lValue, xlBoth], "100%");
export const FullContainerWithFiveItems = test(
    [item, lBoth, item, xlValue, lKey],
    "100%"
);
export const FullContainerWithSixItems = test(
    [item, lBoth, xlBoth, xlValue, lKey, item],
    "100%"
);
export const FullContainerWithSevenItems = test(
    [item, lBoth, xlBoth, item, xlValue, lKey, item],
    "100%"
);
