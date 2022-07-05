import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{ slug: string }>()

  const [mode, setMode] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        mode={mode}
        setMode={setMode} 
      />
      <main className="flex flex-1">
        <div className=
        {
          mode
          ?"hidden sm:flex sm:flex-1"
          :"block sm:flex sm:flex-1"
        }
        >
        { slug
          ? <Video lessonSlug={slug} />
          : <div className="flex-1" />
        }
        </div>
        <div className=
        {
          mode
          ?"flex "
          :"hidden sm:block"
          }
        >
          <Sidebar />
        </div>
      </main>
    </div>
  );
}
