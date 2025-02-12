import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/ai-safety-graph/AISafetyGraph",
      "Discord Community": "https://discord.gg/skqQ8y4quR",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    // Component.ArticleTitle(), // off for now
    Component.Graph({
      localGraph: {
        // THIS is the default graph - not the full screen
        drag: true, // whether to allow panning the view around
        zoom: true, // whether to allow zooming in and out
        depth: 2.5, // how many hops of notes to display
        scale: 2.5, // default view scale
        repelForce: 0.8, // how much nodes should repel each other
        centerForce: 0.4, // how much force to use when trying to center the nodes
        linkDistance: 80, // how long should the links be by default?
        fontSize: 1.2, // what size should the node labels be?
        opacityScale: 0, // how quickly do we fade out the labels when zooming out?
        removeTags: [], // what tags to remove from the graph
        showTags: true, // whether to show tags in the graph
        focusOnHover: true,
      },
      globalGraph: {
        drag: true, // whether to allow panning the view around
        zoom: true, // whether to allow zooming in and out
        depth: 3, // how many hops of notes to display
        scale: 1, // default view scale
        repelForce: 0.6, // how much nodes should repel each other
        centerForce: 0.4, // how much force to use when trying to center the nodes
        linkDistance: 180, // how long should the links be by default?
        fontSize: 0.8, // what size should the node labels be?
        opacityScale: 0, // how quickly do we fade out the labels when zooming out?
        removeTags: [], // what tags to remove from the graph
        showTags: true, // whether to show tags in the graph
        focusOnHover: true,
      },
    }),
  ],
  left: [
    Component.Breadcrumbs(),
    // Component.PageTitle(),
    Component.ArticleTitle(),
    Component.MobileOnly(Component.Spacer()),
    // Component.Search(),
    // Component.PageTitle(),
    Component.ContentMeta(),
    Component.TagList(),

    // Component.Darkmode(),
    // Component.DesktopOnly(Component.Explorer()),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
  right: [],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    // Component.DesktopOnly(Component.Explorer()),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
  right: [],
}
