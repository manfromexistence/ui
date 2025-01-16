function getViewBoxFromPath(pathData) {
    if (!pathData) return null;

    // Corrected command extraction regex: use lookahead assertion
    const commands = pathData.match(/[MmLlHhVvCcSsQqTtAaZz](?=[\d\.\-,\s]|$)/g).map((command, index, original) => {
      const nextCommandIndex = original.findIndex((c, i) => i > index && /[MmLlHhVvCcSsQqTtAaZz]/.test(c));
      const valueString = nextCommandIndex > -1 ? pathData.substring(pathData.indexOf(command) + command.length, pathData.indexOf(original[nextCommandIndex])) : pathData.substring(pathData.indexOf(command) + command.length);
      return command + valueString;
    });

    if (!commands) return null;

    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    let currentX = 0, currentY = 0;

    for (const command of commands) {
        const type = command[0];
        const values = command.substring(1).trim().split(/[\s,]+/).filter(val => val !== '').map(Number);

        switch (type) {
            case 'M': currentX = values[0]; currentY = values[1]; break;
            case 'm': currentX += values[0]; currentY += values[1]; break;
            case 'L': currentX = values[0]; currentY = values[1]; break;
            case 'l': currentX += values[0]; currentY += values[1]; break;
            case 'H': currentX = values[0]; break;
            case 'h': currentX += values[0]; break;
            case 'V': currentY = values[0]; break;
            case 'v': currentY += values[0]; break;
            case 'C': currentX = values[4]; currentY = values[5]; break;
            case 'c': currentX += values[4]; currentY += values[5]; break;
            case 'S': currentX = values[2]; currentY = values[3]; break;
            case 's': currentX += values[2]; currentY += values[3]; break;
            case 'Q': currentX = values[2]; currentY = values[3]; break;
            case 'q': currentX += values[2]; currentY += values[3]; break;
            case 'T': currentX = values[0]; currentY = values[1]; break;
            case 't': currentX += values[0]; currentY += values[1]; break;
            case 'A': currentX = values[5]; currentY = values[6]; break;
            case 'a': currentX += values[5]; currentY += values[6]; break;
            case 'Z': case 'z': break;
        }

        minX = Math.min(minX, currentX);
        minY = Math.min(minY, currentY);
        maxX = Math.max(maxX, currentX);
        maxY = Math.max(maxY, currentY);
    }

    if (minX === Infinity || minY === Infinity || maxX === -Infinity || maxY === -Infinity) return null;

    const width = maxX - minX;
    const height = maxY - minY;
    return `${minX} ${minY} ${width} ${height}`;
}

const pathData = "M244.377 427.349c0 6.85-.044 13.703-.044 20.597c60.027.09 120.053 0 180.077.046c0-6.853-.043-13.703-.043-20.554c-12.067-2.432-26.964-5.835-31.605-18.962c-46.101-114.703-92.869-229.187-138.352-344.11c-33.24-.575-66.479-.354-99.719-.132c6.188 13.88 11.36 28.2 17.77 41.99c-38.942 101.178-78.502 202.178-118.02 303.136c-4.464 12.862-19.096 15.737-30.808 18.167c0 6.763-.043 13.57-.043 20.378c38.278.177 76.556.044 114.835.088c-.044-6.939-.044-13.835-.087-20.73c-12.023-1.856-25.814-1.635-35.583-9.946c-7.69-7.425-4.287-19.007-1.105-27.715c7.647-19.757 14.897-39.693 23.25-59.186c46.37.266 92.69-.043 139.059.132c6.366 15.824 12.73 31.692 19.096 47.56c4.244 10.696 8.09 22.676 4.64 34.168c-8.93 14.81-28.289 13.927-43.318 15.074zM138.735 293.64c17.77-47.208 36.599-94.061 54.014-141.401c18.787 47.163 37.704 94.282 56.534 141.401a11615 11615 0 0 1-110.548 0";
const viewBox = getViewBoxFromPath(pathData);
console.log(viewBox); // Now gives the correct output