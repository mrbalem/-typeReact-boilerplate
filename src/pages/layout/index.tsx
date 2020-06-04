/**
 *  @version 1.0.0
 *  @author Rony - Mrvalem
 *  @description Template de las páginas, preparada para SEO.
 */

import * as React from "react";
import { Helmet } from "react-helmet-async";

// Componentes
import Header from "../../components/header";
import Footer from "../../components/footer";

/**
 *  @param: {String} title: "Título de la página"
 *  @param: {String} description: "Descripción de la página"
 *  @param: {String} keywords: "Etiquetas para SEO"
 */

export interface LayoutProps {
  title: string;
  description: string;
  keywords?: string;
  children: React.ReactChild;
}

const Layout: React.SFC<LayoutProps> = (props) => {
  const { title, description, keywords, children } = props;

  return (
    <>
      <Helmet>
        <title>
          {title
            ? title + " - React Boilerplate"
            : "React.js Boilerplate - Mrvalem"}
        </title>
        <meta
          name="description"
          content={
            description ||
            "React.ts Simple and clean Boilerplate, SEO Ready | Reactjs plantilla limpia, organizada y optimizada para SEO"
          }
        />
        <meta
          name="keywords"
          content={
            keywords ||
            "React.ts, boilterplate, trejocode react, reactjs boilterplate, react-router-dom"
          }
        />
      </Helmet>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
