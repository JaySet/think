import React from 'react';
import { Editor } from '@tiptap/core';
import { Button } from '@douyinfe/semi-ui';
import { IconCode } from '@douyinfe/semi-icons';
import { Tooltip } from 'components/tooltip';
import { isTitleActive } from '../../utils/is-active';

export const Code: React.FC<{ editor: Editor }> = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <Tooltip content="行内代码">
      <Button
        theme={editor.isActive('code') ? 'light' : 'borderless'}
        type="tertiary"
        icon={<IconCode />}
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={isTitleActive(editor)}
      />
    </Tooltip>
  );
};