import React, { useState } from 'react';

import CodeBlock from '@theme/CodeBlock';

import './playground.css';

enum Mode {
  iOS = 'ios',
  MD = 'md',
}

export default function Playground() {
  const [mode, setMode] = useState(Mode.iOS);
  const [codeExpanded, setCodeExpanded] = useState(false);

  // TODO FW-741: Load code snippets remotely

  return (
    <div className="playground">
      <div className="playground-container">
        <div className="playground__control-toolbar">
          {/* TODO FW:-742: Code language switcher */}
          <div className="playground__control-group">
            <button
              type="button"
              className={
                'playground__control-button ' + (mode === Mode.iOS ? 'playground__control-button--selected' : '')
              }
              onClick={() => setMode(Mode.iOS)}
            >
              iOS
            </button>
            <button
              type="button"
              className={
                'playground__control-button ' + (mode === Mode.MD ? 'playground__control-button--selected' : '')
              }
              onClick={() => setMode(Mode.MD)}
            >
              MD
            </button>
          </div>
          <div className="playground__control-group playground__control-group--end">
            <button
              className="playground__icon-button"
              aria-label={codeExpanded ? 'Hide source code' : 'Show full source'}
              onClick={() => setCodeExpanded(!codeExpanded)}
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path d="M9 16L5 12L9 8" stroke="current" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15 16L19 12L15 8" stroke="current" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {/* TODO FW-738: Report an Issue Button */}
            <a
              className="playground__icon-button"
              href="https://github.com/ionic-team/ionic-docs/issues/new/choose"
              aria-label="Report an issue"
              target="_blank"
            >
              <svg aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path
                  d="M2.23077 1H9M9 1V7.76923M9 1L1 9"
                  stroke="current"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            {/* TODO FW-739: Copy Source Code Button */}
            {/* TODO FW-740: Open Stackblitz Button */}
          </div>
        </div>
        <div className="playground__preview">{/* TODO FW-743: iframe Preview */}</div>
      </div>
      <div
        className={'playground__code-block ' + (codeExpanded ? 'playground__code-block--expanded' : '')}
        aria-expanded={codeExpanded ? 'true' : 'false'}
      >
        {/* TODO FW-744: Code blocks per language */}
        <CodeBlock>Fake code block</CodeBlock>
      </div>
    </div>
  );
}
