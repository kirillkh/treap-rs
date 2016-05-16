var searchIndex = {};
searchIndex["treap"] = {"doc":"Randomized Treap","items":[[0,"map","treap","",null,null],[3,"TreapMap","treap::map","A map based on a randomized treap.",null,null],[3,"Iter","","An iterator over a treap&#39;s entries.",null,null],[3,"IterMut","","A mutable iterator over a treap&#39;s entries.",null,null],[3,"IntoIter","","An owning iterator over a treap&#39;s entries.",null,null],[3,"OrderedIter","","An iterator over a treap&#39;s entries in key order.",null,null],[11,"clone","","",0,{"inputs":[{"name":"treapmap"}],"output":{"name":"treapmap"}}],[11,"fmt","","",0,{"inputs":[{"name":"treapmap"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Create an empty treap with the default random number generator. The\nXorShift random number generator is used by default since it is fast,\nbut please note that it is not cryptographically secure.",0,{"inputs":[],"output":{"name":"treapmap"}}],[11,"new_with_rng","","Create an empty treap with a given random number generator.",0,{"inputs":[{"name":"rng"}],"output":{"name":"treapmap"}}],[11,"len","","Return the number of elements in the treap.",0,{"inputs":[{"name":"treapmap"}],"output":{"name":"usize"}}],[11,"is_empty","","Return true if the treap contains no elements.",0,{"inputs":[{"name":"treapmap"}],"output":{"name":"bool"}}],[11,"clear","","Removes all elements from the treap.",0,{"inputs":[{"name":"treapmap"}],"output":null}],[11,"get","","Borrow the value corresponding to the given key if it exists in the treap.",0,{"inputs":[{"name":"treapmap"},{"name":"k"}],"output":{"name":"option"}}],[11,"get_mut","","Return a mutable reference to the value corresponding to the given key if it exists in the treap.",0,{"inputs":[{"name":"treapmap"},{"name":"k"}],"output":{"name":"option"}}],[11,"contains_key","","Returns true if the key is present in the treap.",0,{"inputs":[{"name":"treapmap"},{"name":"k"}],"output":{"name":"bool"}}],[11,"insert","","Insert a value with a given key. Returns the previous value if the key is already in the\ntreap.",0,{"inputs":[{"name":"treapmap"},{"name":"k"},{"name":"v"}],"output":{"name":"option"}}],[11,"remove","","Remove the given key from the treap and return the value associated with it if any.",0,{"inputs":[{"name":"treapmap"},{"name":"k"}],"output":{"name":"option"}}],[11,"iter_ordered","","Returns an iterator over keys and values in the treap that gives the keys in sorted order.",0,{"inputs":[{"name":"treapmap"}],"output":{"name":"orderediter"}}],[11,"extend","","",0,{"inputs":[{"name":"treapmap"},{"name":"t"}],"output":null}],[11,"from_iter","","",0,{"inputs":[{"name":"t"}],"output":{"name":"treapmap"}}],[11,"default","","",0,{"inputs":[],"output":{"name":"treapmap"}}],[11,"into_iter","","",0,{"inputs":[{"name":"treapmap"}],"output":{"name":"intoiter"}}],[11,"index","","",0,{"inputs":[{"name":"treapmap"},{"name":"k"}],"output":{"name":"v"}}],[11,"index_mut","","",0,{"inputs":[{"name":"treapmap"},{"name":"k"}],"output":{"name":"v"}}],[11,"next","","",1,{"inputs":[{"name":"iter"}],"output":{"name":"option"}}],[11,"next","","",2,{"inputs":[{"name":"itermut"}],"output":{"name":"option"}}],[11,"next","","",3,{"inputs":[{"name":"intoiter"}],"output":{"name":"option"}}],[11,"next","","",4,{"inputs":[{"name":"orderediter"}],"output":{"name":"option"}}],[0,"set","treap","",null,null],[3,"TreapSet","treap::set","A set based on a randomized treap",null,null],[11,"new","","Returns a new empty set.",5,{"inputs":[],"output":{"name":"treapset"}}],[11,"len","","Returns the number of elements in the set.",5,{"inputs":[{"name":"treapset"}],"output":{"name":"usize"}}],[11,"clean","","Remove all elements from the set.",5,{"inputs":[{"name":"treapset"}],"output":null}],[11,"is_empty","","Returns true if the set is empty.",5,{"inputs":[{"name":"treapset"}],"output":{"name":"bool"}}],[11,"contains","","Returns true if the item is in the set.",5,{"inputs":[{"name":"treapset"},{"name":"t"}],"output":{"name":"bool"}}],[11,"insert","","Add a item to the set. Returns true if the item was not in the set already.",5,{"inputs":[{"name":"treapset"},{"name":"t"}],"output":{"name":"bool"}}],[11,"remove","","Remove a item from the set. Returns true if the item was in the set.",5,{"inputs":[{"name":"treapset"},{"name":"t"}],"output":{"name":"bool"}}]],"paths":[[3,"TreapMap"],[3,"Iter"],[3,"IterMut"],[3,"IntoIter"],[3,"OrderedIter"],[3,"TreapSet"]]};
initSearch(searchIndex);
