import React, {useState, useEffect, useRef} from 'react';
import useCurrentWidth from '../utils/width';
import useCurrentHeight from '../utils/height';
import AccordionPanel from './Accordion';
import './../styles/projects.scss';
import ProjectsList from './ProjectsList';
import StackGrid from 'react-stack-grid';

const defaultSearch = ['academic', 'article', 'professional', 'project']

function Projects() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [clicked, setClicked] = useState(false);
    const grid = React.useRef(null);
    var currentWidth = useCurrentWidth();
    var gridWidth = '33.33%';

    useEffect(() => {
        const results = ProjectsList.filter(proj => {
            return Object.keys(proj).some(key =>
                proj[key].toLowerCase().includes(searchValue.toLowerCase())
            )
        });
        setSearchResults(results);
    }, [searchValue]
    );

    useEffect(() => {
        requestAnimationFrame(() => {
            if (grid.current) {
              grid.current.updateLayout();
            }
        });

    }, [grid, currentWidth, clicked, searchValue]
    );

    function gridColumnWidth() {
        if (currentWidth >= 1000) {
            gridWidth = '25%'
        } else if (currentWidth > 800) {
            gridWidth = '33.33%'
        } else if (currentWidth < 800) {
            gridWidth = '50%'
        }
        return gridWidth;
    }

    return (
        <div id="projects">
            <div className="container">
                <div className="itemspace">

                    <div className="title">Projects</div>

                    <div className="subtitle">
                        seeing {searchResults.length} of {ProjectsList.length}
                    </div>

                    <div className="filterbox">
                        <input 
                            type='text'
                            placeholder='search'
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            className="searchField"
                            style={currentWidth <= 800 ? {width: 'calc(80vw - 22px)'} : {width: 'calc(33.33% - 30px)'}}
                        />
                        
                        {defaultSearch.map(key => (
                            <button 
                                onClick={ () => {searchValue.toLowerCase().includes(key) ? setSearchValue('') : setSearchValue(key) }}
                                className={ searchValue.toLowerCase().includes(key) ? 'buttonSelected' : null }
                            >   {key}{ searchValue.toLowerCase().includes(key) ? <span className="clearFilter"> x</span> : null}</button>
                        ))}
                        {/* {searchValue!= '' ? <button onClick={() => setSearchValue('')} className="clearbutton">clear filter</button> : null} */}
                    </div>

                    <div className="projects">
                        <StackGrid 
                            columnWidth={gridColumnWidth()}
                            gutterHeight={5}
                            gutterWidth={15}
                            gridRef={r => (grid.current = r)}
                        >
                            {searchResults.map(item => (
                                <div className="click" onClick={() => setClicked(!clicked)}>
                                    <AccordionPanel
                                    title={item.title}
                                    type={item.type}
                                    url={item.url}
                                    description={item.description}
                                    institution={item.institution}
                                    />
                                </div>
                            ))}
                        </StackGrid>
                    </div>

                </div>
            </div>
        </div>
    )
    
}

export default Projects;