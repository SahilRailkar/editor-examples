import React, { useEffect } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import { defaultExtensions } from '@tiptap/starter-kit'
import './styles.scss'

import MenuBar from './MenuBar';

import { useQuery, useMutation } from '@apollo/client';
import { LOAD_HUB } from '../../graphql/queries';
import { UPDATE_HUB } from '../../graphql/mutations';

const Editor = () => {
  const { data } = useQuery(LOAD_HUB);
  const [ updateHub ] = useMutation(UPDATE_HUB);

  const editor = useEditor({
    extensions: [
      ...defaultExtensions(),
    ],
    content: (data === undefined ? '<p> Loading... </p>' : JSON.parse(data.getHub.description)),
    onBlur({ editor }) {
      updateHub({ variables: {description: JSON.stringify(editor.getJSON()) }})
    }
  });

  useEffect(() => {
    if (editor !== null && data !== undefined) {
      editor.commands.setContent(JSON.parse(data.getHub.description));
    }
  }, [editor, data]);

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}

export default Editor;

// `
//   <h2>
//     Hi there,
//   </h2>
//   <p>
//     this is a basic <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
//   </p>
//   <ul>
//     <li>
//       That’s a bullet list with one …
//     </li>
//     <li>
//       … or two list items.
//     </li>
//   </ul>
//   <p>
//     Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
//   </p>
//   <pre><code class="language-css">body {
// display: none;
// }</code></pre>
//   <p>
//     I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
//   </p>
//   <blockquote>
//     Wow, that’s amazing. Good work, boy! 👏
//     <br />
//     — Mom
//   </blockquote>
// `