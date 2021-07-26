import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { Header } from '../Header';
import { ArticleHeader } from "./ArticleHeader"

const codes1 = `using Microsoft.JSInterop;
using System.Threading.Tasks;

public class BrowserService
{
  private readonly IJSRuntime _js;

  public BrowserService(IJSRuntime js)
  {
    _js = js;
  }

  public async Task<BrowserDimension> GetDimensions()
  {
    return await _js.InvokeAsync<BrowserDimension>("getDimensions");
  }
}

public class BrowserDimension
{
  public int Width { get; set; }
  public int Height { get; set; }
}`;

const codes2 = `public void ConfigureServices(IServiceCollection services)
{
    services.AddRazorPages();
    services.AddServerSideBlazor();
    services.AddScoped<BrowserService>(); // scoped service
}`;

const codes3 = `    <script type="text/javascript">
window.getDimensions = function() {
    return {
            width: window.innerWidth,
            height: window.innerHeight
        };
};
</script>`;

const codes4 = `@page "/dimensions"

@using BlazorApp.Service
@inject BrowserService Service

<h1>Window Dimensions</h1>

<p>Window Height: @Height</p>
<p>Window Width: @Width</p>

<button @onclick="GetDimensions">Get Dimensions</button>

@code {

    public int Height { get; set; }
    public int Width { get; set; }

    async Task GetDimensions() {
        var dimension = await Service.GetDimensions();
        Height = dimension.Height;
        Width = dimension.Width;
    }

}`;


function ReadWindowDimensions() {
  return (
    <div className="post-template-default single single-post postid-45 single-format-standard layout-no-sidebar">
      <Header />
      <div id="content" className="site-content">
        <div id="primary" className="content-area">
          <main id="main" className="site-main" role="main">
            <article className="post  type-post  status-publish  format-standard  hentry  category-getting-started ">

              <ArticleHeader
                title="How to read Window Dimensions in Blazor?"
                link="/blazor-how-to-ready-window-dimensions"
                publishdate="2019-10-02"></ArticleHeader>

              <div className="entry-content">
                <p>Blazor.tips How to read the browser window dimensions</p>
                <p>window.innerHeight and window.innerWidth</p>
                <p>first create a service class to read the dimensions from javascript</p>

                <SyntaxHighlighter language="csharp" showLineNumbers="true" >
                  {codes1}
                </SyntaxHighlighter>

                <p>register the service with the DI on startup.cs</p>

                <SyntaxHighlighter language="csharp" showLineNumbers="true" >
                  {codes2}
                </SyntaxHighlighter>

                <p> add the javascript codes to read the window dimensions you can add them to the _Host.cshtml file directly or
                  add them to a js file </p>

                <SyntaxHighlighter language="csharp" showLineNumbers="true" >
                  {codes3}
                </SyntaxHighlighter>

                <p>add new razor file to display the dimensions</p>

                <SyntaxHighlighter language="csharp" showLineNumbers="true" >
                  {codes4}
                </SyntaxHighlighter>

                <figure className="wp-block-image">
                  <img src="/img/blazor-windows-dimensions.png" alt="" />
                </figure>
                <p>Blazor.tips</p>
              </div>
              <footer className="entry-footer"></footer>
            </article>
          </main>
        </div>
      </div>
    </div>
  );
}

export default ReadWindowDimensions;
