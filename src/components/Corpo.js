import React from "react";
import Stories from "./Stories";
import Posts from "./Posts";
import Sugestoes from "./Sugestoes";
import Usuario from "./Usuario";
import SidebarOthers from "./SidebarOthers";

export default function Corpo() {

    function Esquerda() {
        return (
            <div class="esquerda"> 
                <Stories />
                <Posts />
            </div>
        );
    };

    function Sidebar() {

        return (
            <div class="sidebar">
                <Usuario imgsrc="./assets/img/catanacomics.svg" username="catanacomics" usertext="Catana" />
                <Sugestoes />
                <SidebarOthers />
            </div>
        );
    };

    return (
        <div class="corpo">
            <Esquerda />
            <Sidebar />    
        </div>
    );
};
