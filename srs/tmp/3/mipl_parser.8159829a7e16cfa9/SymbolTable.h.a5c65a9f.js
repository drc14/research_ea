var data = {lines:[
{"lineNum":"    1","line":"#ifndef SYMBOL_TABLE_H"},
{"lineNum":"    2","line":"#define SYMBOL_TABLE_H"},
{"lineNum":"    3","line":""},
{"lineNum":"    4","line":"#include <map>"},
{"lineNum":"    5","line":"#include <string>"},
{"lineNum":"    6","line":"#include \"SymbolTableEntry.h\""},
{"lineNum":"    7","line":"using namespace std;"},
{"lineNum":"    8","line":""},
{"lineNum":"    9","line":"class SYMBOL_TABLE {","class":"linePartCov","hits":"4","order":"767","possible_hits":"9",},
{"lineNum":"   10","line":"private:"},
{"lineNum":"   11","line":"  std::map<string, SYMBOL_TABLE_ENTRY> hashTable;"},
{"lineNum":"   12","line":""},
{"lineNum":"   13","line":"public:"},
{"lineNum":"   14","line":"  //Constructor"},
{"lineNum":"   15","line":"  SYMBOL_TABLE( ) { }","class":"linePartCov","hits":"2","order":"734","possible_hits":"3",},
{"lineNum":"   16","line":""},
{"lineNum":"   17","line":"  // Add SYMBOL_TABLE_ENTRY x to this symbol table."},
{"lineNum":"   18","line":"  // If successful, return true; otherwise, return false."},
{"lineNum":"   19","line":"  bool addEntry(SYMBOL_TABLE_ENTRY x) {","class":"lineCov","hits":"2","order":"869","possible_hits":"2",},
{"lineNum":"   20","line":"    // Make sure there isn\'t already an entry with the same name"},
{"lineNum":"   21","line":"    map<string, SYMBOL_TABLE_ENTRY>::iterator itr;","class":"lineCov","hits":"1","order":"870","possible_hits":"1",},
{"lineNum":"   22","line":"    if ((itr = hashTable.find(x.getName())) == hashTable.end()) {","class":"linePartCov","hits":"1","order":"873","possible_hits":"2",},
{"lineNum":"   23","line":"      hashTable.insert(make_pair(x.getName(), x));","class":"linePartCov","hits":"1","order":"896","possible_hits":"2",},
{"lineNum":"   24","line":"\treturn(true);","class":"lineCov","hits":"1","order":"957","possible_hits":"1",},
{"lineNum":"   25","line":"    }"},
{"lineNum":"   26","line":"    else return(false);","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"   27","line":"  }","class":"linePartCov","hits":"1","order":"958","possible_hits":"3",},
{"lineNum":"   28","line":""},
{"lineNum":"   29","line":"  // If a symbol table entry with name theName is"},
{"lineNum":"   30","line":"  // found in this symbol table, then return its token type"},
{"lineNum":"   31","line":"  // info; otherwise, return token info with type UNDEFINED."},
{"lineNum":"   32","line":"  TYPE_INFO findEntry(string theName) {","class":"lineCov","hits":"2","order":"1387","possible_hits":"2",},
{"lineNum":"   33","line":"    TYPE_INFO info = {UNDEFINED, NOT_APPLICABLE, NOT_APPLICABLE,","class":"lineCov","hits":"1","order":"1388","possible_hits":"1",},
{"lineNum":"   34","line":"                      NOT_APPLICABLE};"},
{"lineNum":"   35","line":"    map<string, SYMBOL_TABLE_ENTRY>::iterator itr;","class":"lineCov","hits":"1","order":"1389","possible_hits":"1",},
{"lineNum":"   36","line":"    if ((itr = hashTable.find(theName)) == hashTable.end())","class":"lineCov","hits":"1","order":"1390","possible_hits":"1",},
{"lineNum":"   37","line":"      return(info);","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"   38","line":"    else return(itr->second.getTypeInfo());","class":"lineCov","hits":"1","order":"1400","possible_hits":"1",},
{"lineNum":"   39","line":"  }","class":"linePartCov","hits":"1","order":"1404","possible_hits":"2",},
{"lineNum":"   40","line":""},
{"lineNum":"   41","line":"};"},
{"lineNum":"   42","line":""},
{"lineNum":"   43","line":"#endif  // SYMBOL_TABLE_H"},
]};
var percent_low = 25;var percent_high = 75;
var header = { "command" : "mipl_parser", "date" : "2018-11-28 14:11:04", "instrumented" : 16, "covered" : 14,};
var merged_data = [];
