"use client";
import React, { useState } from "react";
import { render } from "react-dom";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");

  const [mainTask, setmaintask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setmaintask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setmaintask(copyTask);
  };

  let renderTask = (
    <h1 className="bg-white text-black m-3 px-3 py-3 rounded-md">
      No Task available
    </h1>
  );

  if (mainTask.length > 0) {
    renderTask = (
      <>
        <div className="flex justify-between mb-5 w-2/3 underline">
          <h1>Task</h1>
          <h1>Description</h1>
        </div>
        {mainTask.map((t, i) => (
          <li key={i} className="flex items-center justify-between">
            <div className="flex justify-between mb-5 w-2/3">
              <h1>{t.title}</h1>
              <h1>{t.desc}</h1>
            </div>
            <button
              className="bg-red-600 text-white font-semibold p-3 mb-3 rounded-md"
              onClick={() => {
                deleteHandler(i);
              }}
            >
              DELETE
            </button>
          </li>
        ))}
      </>
    );
  }

  return (
    <>
    <div className="box-border m-0 p-0">
      <div className="bg-black h-16">
        <h1 className="text-white font-bold text-center p-4 text-2xl">
          Kashika's TODO List
        </h1>
      </div>

      <form className="text-center" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter your task"
          className="text-l border-zinc-950 border-2 m-0 px-5 py-2 rounded"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Enter your description"
          className="text-l border-zinc-900 border-2 m-8 px-5 py-2 rounded"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />

        <button className="bg-black text-white p-3 m-3 rounded-lg">
          Add Task
        </button>
      </form>
      <div className="flex justify-center h-max">
        <div className="bg-black opacity-90 font-semibold p-8 w-1/2 text-white rounded-2xl">
          <ul className="text-center">{renderTask}</ul>
        </div>
      </div>
      </div>
    </>
  );
};

export default page;
0