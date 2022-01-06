/**
 * Capitalization importable object 
 * Make the first letter a Capital letter
 */
 export const capitalizationString = (string)=>{
    
    return string!=null? string[0].toUpperCase()+string.slice(1):
    "can't capitalize null";
}; 
export const foo = "bar";
export const bar ="foo";

