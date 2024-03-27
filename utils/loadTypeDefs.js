import { loadFilesSync } from "@graphql-tools/load-files";
import { join, resolve } from "path";
import { readdirSync, statSync } from "fs";

function getFilePaths(folderPath) {
	const files = [];

	function traverseDirectory(dir) {
		const items = readdirSync(dir);

		items.forEach((item) => {
			const itemPath = join(dir, item);
			const stats = statSync(itemPath);

			if (stats.isDirectory()) {
				traverseDirectory(itemPath);
			} else if (stats.isFile() && itemPath.endsWith(".graphql")) {
				files.push(itemPath);
			}
		});
	}

	traverseDirectory(folderPath);
	return files;
}

export function loadTypeDefs(folderPath) {
	const filePaths = getFilePaths(resolve(folderPath));
	return loadFilesSync(filePaths, { extensions: ["graphql"] });
}
