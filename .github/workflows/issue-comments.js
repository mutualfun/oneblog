name: "Comment run"
on:
  issue_comment:
  types: [created, edited]

  jobs:
  comment-run:
    runs-on: ubuntu-latest
    steps:
      uses: bdougie/gipht-bot@main
