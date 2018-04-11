var React = require("react");
import PropTypes from 'prop-types';
var api = require("./utils/api");
let Loading = require("./Loading");

function SelectLanguage(props) {
  let languages = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"];
  return (<ul className='languages'>
    {languages.map(lang => {
      return (
        <li
          style={lang === props.selectedLanguage ? {color: '#d0021b'}: null}
          key={lang}
          onClick={props.onSelect.bind(this, lang)}
          >
            {lang}
          </li>
        )
      })}
    </ul>)
}

const RepoGrid = (props) => {
  return (
    <ul className='popular-list'>
      {
        props.repos.map((repo, index) => {
          return (
            <div key={repo.name} className='popular-item'>
            <div className='popular-rank'>#{index+1}</div>
            <ul className='space-list-items'>
              <li>
                <img className='avatar' src={repo.owner.avatar_url} alt={'Avatar for ' + repo.owner.login}/>
              </li>
            </ul>
          <li><a href={repo.html_url}>{repo.name}</a></li>
          <li>@{repo.owner.login}</li>
          <li>{repo.stargazers_count} stars</li>
        </div>
        )
        })
      }
    </ul>
  )
}


RepoGrid.propTypes = {
    repos: PropTypes.array.isRequired
};

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: "All",
      repos: null
    }
  }

  componentDidMount() {
    // AJAX
    this.updateLanguage(this.state.selectedLanguage)
  }

  updateLanguage = (lang) => {
    this.setState({ selectedLanguage: lang, repos: null })

    api.fetchPopularRepos(lang)
    .then(repos => {
      this.setState({ repos: repos })
    })
  }

  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
        {!this.state.repos
          ? <Loading text="DOWNLOADING" speed={10}/>
          : <RepoGrid repos={this.state.repos} />
        }
      </div>
    )
  }
}

module.exports = Popular;
