exports.getDifficultyLevelViewData = function(difficultyLevel) {
    const titles = [
      "1 - Very Easy",
      "2 - Easy",
      "3 - Medium (Standard 3x3)",
      "4 - Intermediate",
      "5 - Expert",
      "6 - Hardcore",
    ];
  
    const options = titles.map((title, index) => ({
      title,
      value: index + 1,
      selected: Number(difficultyLevel) === index+1
    }));
  
    return options
  }