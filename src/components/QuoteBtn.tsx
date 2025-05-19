import { useState } from "react";



interface QuoteBtnProps {
  toggleForm: () => void;
}

function QuoteBtn({toggleForm}: QuoteBtnProps) {
  
  return (
    <div className="QuoteBtn-container">
      <button className="QuoteBtn" onClick={() => toggleForm()}>
        Get a Quote
      </button>
    </div>
  );
}

export default QuoteBtn;
