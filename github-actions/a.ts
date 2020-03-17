const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    //const message = core.getInput('message');
    //const github_token = core.getInput('GITHUB_TOKEN');

    console.log(github.context);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
