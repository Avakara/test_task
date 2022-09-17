import React, { useState } from 'react';

const Accordion = ({ title, content1, content2, content3, content4, content5 }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
        {isActive && <div className="accordion-content">
                        <div class="btn-group-vertical" role="group" aria-label="Vertical radio toggle button group">
                            <input type="radio" class="btn-check" name="vbtn-radio" id={content1} autocomplete="off"/>
                            <label class="btn" for={content1}># {content1}</label>
                            <input type="radio" class="btn-check" name="vbtn-radio" id={content2} autocomplete="off"/>
                            <label class="btn" for={content2}># {content2}</label>
                            <input type="radio" class="btn-check" name="vbtn-radio" id={content3} autocomplete="off"/>
                            <label class="btn" for={content3}># {content3}</label>
                            <input type="radio" class="btn-check" name="vbtn-radio" id={content4} autocomplete="off"/>
                            <label class="btn" for={content4}># {content4}</label>
                            <input type="radio" class="btn-check" name="vbtn-radio" id={content5} autocomplete="off"/>
                            <label class="btn" for={content5}># {content5}</label>
                        </div>
                    </div>}
    </div>
  );
};

export default Accordion;