import moxios from 'moxios';
import {testStore} from '../utils/index';
import {fetchPlanetsAction} from '../store/actions/fetchActions';


describe('fetchPlanets integration test', ()=>{

})


beforeEach(()=>{
    moxios.install();
})

afterEach(()=>{
    moxios.uninstall
}) 

test('Check whether store is updated with input from API', ()=>{
    const expectedState = [
        {
            planetName:'Planet1',
            Distance:100
        },
        {
            planetName:'Planet3',
            Distance:300
        },
        {
            planetName:'Planet3',
            Distance:300
        }
         
    ]

    const store = testStore();
    moxios.wait(()=>{
        const request = moxios.requests.mostRecent();
        request.respondWith({
            status:200,
            response:expectedState
        })
    });

    return store.dispatch(fetchPlanetsAction())
    .then(()=>{
    const newState = store.getState();  
    expect(newState.planets).toBe(expectedState);
}) 
});

