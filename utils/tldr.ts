// deno-lint-ignore-file no-explicit-any
const API_URL = "https://api.github.com/repos/tldr-pages/tldr/contents/pages";
const DL_URL = "https://raw.githubusercontent.com/tldr-pages/tldr/main/pages";
const WEB_URL = "https://tldr.inbrowser.app/pages";

interface File {
  name: string;
  [key: string]: any;
}

interface Page {
  title: string;
  description: string;
  content: string;
  link: string;
}

const search = async (type: string, page: string): Promise<string[]> => {
  const matches: string[] = [];

  const response = await fetch(`${API_URL}/${type}`);

  if (response.status != 200) return [];

  const jsonData: File[] = await response.json();

  jsonData.forEach((file) => {
    const fileName = file.name.slice(0, -3);
    if (fileName.startsWith(page)) {
      if (fileName == page) {
        matches.unshift(fileName);
      } else {
        matches.push(fileName);
      }
    }
  });

  return matches;
};


const getPage = async (type: string, page: string): Promise<Page> => {
  const response = await fetch(`${DL_URL}/${type}/${page}.md`);

  const responseText = await response.text();

  const lines = responseText.split('\n').map((line) => {
    if (line.startsWith(">")) {
      return `_${line.slice(2)}_`;
    }
    return line;
  });
  const title = lines[0].replace(/^#\s?/, "");

  lines[0] = `*${title}*`;
  const content = lines.join('\n');

  return {
    title: title,
    description: type,
    content: content,
    link: `${WEB_URL}/${type}/${page}`,
  };
};


export default async (page: string) => {
  const matches = await search("linux", page);
  const pages = await Promise.all(matches.map(async (page) => await getPage("linux", page)));

  if (pages.length < 10) {
    const _matches = await search("common", page);
    const _pages = await Promise.all(_matches.map(async (page) => await getPage("common", page)));
    pages.push(..._pages);
  }

  return pages;
};
