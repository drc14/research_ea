var data = {lines:[
{"lineNum":"    1","line":"#ifndef SYMBOL_TABLE_ENTRY_H"},
{"lineNum":"    2","line":"#define SYMBOL_TABLE_ENTRY_H"},
{"lineNum":"    3","line":""},
{"lineNum":"    4","line":"#include <string>"},
{"lineNum":"    5","line":"using namespace std;"},
{"lineNum":"    6","line":""},
{"lineNum":"    7","line":"#define UNDEFINED  \t\t\t-1   // Type codes"},
{"lineNum":"    8","line":"#define PROCEDURE\t\t\t0"},
{"lineNum":"    9","line":"#define INT\t\t\t\t\t1"},
{"lineNum":"   10","line":"#define CHAR\t\t\t\t2"},
{"lineNum":"   11","line":"#define INT_OR_CHAR\t\t\t3"},
{"lineNum":"   12","line":"#define BOOL\t\t\t\t4"},
{"lineNum":"   13","line":"#define INT_OR_BOOL\t\t\t5"},
{"lineNum":"   14","line":"#define CHAR_OR_BOOL\t\t6"},
{"lineNum":"   15","line":"#define INT_OR_CHAR_OR_BOOL\t7"},
{"lineNum":"   16","line":"#define ARRAY\t\t\t\t8"},
{"lineNum":"   17","line":"#define INDEX_RANGE\t\t\t9"},
{"lineNum":"   18","line":"#define PROGRAM\t\t\t\t10"},
{"lineNum":"   19","line":""},
{"lineNum":"   20","line":"#define NOT_APPLICABLE\t-1"},
{"lineNum":"   21","line":""},
{"lineNum":"   22","line":"typedef struct {"},
{"lineNum":"   23","line":"  int type;        // one of the above type codes"},
{"lineNum":"   24","line":"  int startIndex;  // if array, starting index"},
{"lineNum":"   25","line":"  int endIndex;    //           ending index"},
{"lineNum":"   26","line":"  int baseType;    //           base type (one of above codes)"},
{"lineNum":"   27","line":"  bool entireVar;  // If entire variable or not (A vs A[5] => True vs False)"},
{"lineNum":"   28","line":"} TYPE_INFO;"},
{"lineNum":"   29","line":""},
{"lineNum":"   30","line":"class SYMBOL_TABLE_ENTRY {","class":"linePartCov","hits":"6","order":"901","possible_hits":"9",},
{"lineNum":"   31","line":"private:"},
{"lineNum":"   32","line":"  // Member variables"},
{"lineNum":"   33","line":"  string name;"},
{"lineNum":"   34","line":"  TYPE_INFO typeInfo;"},
{"lineNum":"   35","line":""},
{"lineNum":"   36","line":"public:"},
{"lineNum":"   37","line":"  // --- Constructors --- //"},
{"lineNum":"   38","line":"  // Default"},
{"lineNum":"   39","line":"  SYMBOL_TABLE_ENTRY( ) {"},
{"lineNum":"   40","line":"    name = \"\";"},
{"lineNum":"   41","line":"    typeInfo.type = UNDEFINED;"},
{"lineNum":"   42","line":"    typeInfo.startIndex = UNDEFINED;"},
{"lineNum":"   43","line":"    typeInfo.endIndex = UNDEFINED;"},
{"lineNum":"   44","line":"    typeInfo.baseType = UNDEFINED;"},
{"lineNum":"   45","line":"  }"},
{"lineNum":"   46","line":""},
{"lineNum":"   47","line":"  // Array"},
{"lineNum":"   48","line":"  SYMBOL_TABLE_ENTRY(const string theName, const int theType,"},
{"lineNum":"   49","line":"                     const int theStart, const int theEnd,"},
{"lineNum":"   50","line":"                     const int theBaseType) {"},
{"lineNum":"   51","line":"    name = theName;"},
{"lineNum":"   52","line":"    typeInfo.type = theType;"},
{"lineNum":"   53","line":"    typeInfo.startIndex = theStart;"},
{"lineNum":"   54","line":"    typeInfo.endIndex = theEnd;"},
{"lineNum":"   55","line":"    typeInfo.baseType = theBaseType;"},
{"lineNum":"   56","line":"  }"},
{"lineNum":"   57","line":""},
{"lineNum":"   58","line":"  // Normal type"},
{"lineNum":"   59","line":"  SYMBOL_TABLE_ENTRY(const string theName,","class":"lineCov","hits":"1","order":"861","possible_hits":"1",},
{"lineNum":"   60","line":"                     const TYPE_INFO info) {","class":"linePartCov","hits":"1","order":"862","possible_hits":"2",},
{"lineNum":"   61","line":"    name = theName;","class":"lineCov","hits":"1","order":"863","possible_hits":"1",},
{"lineNum":"   62","line":"    typeInfo.type = info.type;","class":"lineCov","hits":"1","order":"864","possible_hits":"1",},
{"lineNum":"   63","line":"    typeInfo.startIndex = info.startIndex;","class":"lineCov","hits":"1","order":"865","possible_hits":"1",},
{"lineNum":"   64","line":"    typeInfo.endIndex = info.endIndex;","class":"lineCov","hits":"1","order":"866","possible_hits":"1",},
{"lineNum":"   65","line":"    typeInfo.baseType = info.baseType;","class":"lineCov","hits":"1","order":"867","possible_hits":"1",},
{"lineNum":"   66","line":"  }","class":"linePartCov","hits":"2","order":"868","possible_hits":"3",},
{"lineNum":"   67","line":""},
{"lineNum":"   68","line":"  // --- Accessors --- //"},
{"lineNum":"   69","line":"  string getName() const { return name; }","class":"linePartCov","hits":"2","order":"880","possible_hits":"3",},
{"lineNum":"   70","line":"  TYPE_INFO getTypeInfo() const { return typeInfo; }","class":"linePartCov","hits":"2","order":"1245","possible_hits":"3",},
{"lineNum":"   71","line":"  int getTypeCode() const { return typeInfo.type; }"},
{"lineNum":"   72","line":"  int getStartIndex() const { return typeInfo.startIndex; }"},
{"lineNum":"   73","line":"  int getEndIndex() const { return typeInfo.endIndex; }"},
{"lineNum":"   74","line":"  int getBaseType() const { return typeInfo.baseType; }"},
{"lineNum":"   75","line":"};"},
{"lineNum":"   76","line":""},
{"lineNum":"   77","line":"#endif  // SYMBOL_TABLE_ENTRY_H"},
]};
var percent_low = 25;var percent_high = 75;
var header = { "command" : "mipl_parser", "date" : "2018-11-28 14:11:04", "instrumented" : 11, "covered" : 11,};
var merged_data = [];
