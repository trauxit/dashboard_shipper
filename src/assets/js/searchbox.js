import React from 'react';

const handleEnterSubmit = (t, e, a, s) => {
    if (t.data && t.data.metadata.triggeredBy === "submit") {
        if (t.data.results && t.data.results.fuzzySearch.results[0]) {
            e.call(this, t.data.results.fuzzySearch.results[0], s);
        } else {
            a.setMessage("No result found");
        }
    }
};

// Rest of your component code...


export default handleEnterSubmit;