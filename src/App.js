import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
import Count from './Count';

export default function App() {
  const [additem, setitem] = useState([]);

  const addNote = note => {
    setitem(prev => {
      return [...prev, note];
    });
    // console.log(note);
  };
  const del = id => {
    setitem(preValue => {
      return [...preValue.filter((note, index) => index !== id)];
    });
  };
  return (
    <>
      <Header />
      <Count
        count={
          additem.length === 0
            ? ''
            : additem.length === 1
            ? `Showing ${additem.length} note in database`
            : `Showing ${additem.length} notes in database`
        }
      />
      <CreateNote passNote={addNote} />
      {additem.map((val, id) => (
        <Note
          key={id}
          id={id}
          title={val.title}
          content={val.content}
          deleteitem={del}
        />
      ))}
      <Footer />
    </>
  );
}