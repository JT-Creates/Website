@echo OFF
TITLE Energy-Reporter
set CUR_YYYY=%date:~10,4%
set CUR_MM=%date:~4,2%
set CUR_DD=%date:~7,2%
set CUR_HH=%time:~0,2%
if %CUR_HH% lss 10 (
    set CUR_HH=0%time:~1,1%
)
if %CUR_HH% GEQ 12 (
    set CUR_HH=CUR_HH-12
    set CUR_AP=PM
) ELSE (
    set CUR_AP=AM
)


set CUR_NN=%time:~3,2%
set CUR_SS=%time:~6,2%
set CUR_MS=%time:~9,2%

set SUBFILENAME=%CUR_MM%-%CUR_DD%-%CUR_YYYY%_At_%CUR_HH%-%CUR_NN%-%CUR_SS%%CUR_AP%

:: BatchGotAdmin
:-------------------------------------
REM  --> Check for permissions
    IF "%PROCESSOR_ARCHITECTURE%" EQU "amd64" (
>nul 2>&1 "%SYSTEMROOT%\SysWOW64\cacls.exe" "%SYSTEMROOT%\SysWOW64\config\system"
) ELSE (
>nul 2>&1 "%SYSTEMROOT%\system32\cacls.exe" "%SYSTEMROOT%\system32\config\system"
)

REM --> If error flag set, we do not have admin.
if '%errorlevel%' NEQ '0' (
    echo Requesting administrative privileges...
    goto UACPrompt
) else ( goto gotAdmin )

:UACPrompt
    echo Set UAC = CreateObject^("Shell.Application"^) > "%temp%\getadmin.vbs"
    set params= %*
    echo UAC.ShellExecute "cmd.exe", "/c ""%~s0"" %params:"=""%", "", "runas", 1 >> "%temp%\getadmin.vbs"

    "%temp%\getadmin.vbs"
    del "%temp%\getadmin.vbs"
    exit /B

:gotAdmin
    pushd "%CD%"
    CD /D "%~dp0"
:--------------------------------------
IF EXIST "C:\Program Files\Energy-Report\." (
    ECHO DIRECTIORY FOUND
) else (
    ECHO CREATING "C:\Program Files\Energy-Report\"
    mkdir "C:\Program Files\Energy-Report\"
)
COLOR F4

:USER_SELECTER
    CLS
    ECHO ===============================================================
    ECHO Battery logger                            %SUBFILENAME%
    ECHO ===============================================================
    ECHO Select an option:
    Choice /C codq /N /M "[C]reate power log | [O]pen report | [D]elete log | [Q]uit"
    If ErrorLevel 4 GoTo :EOF
    If ErrorLevel 3 GoTo DELETE_LOG
    If ErrorLevel 2 GoTo SAVED_LOGS
    If ErrorLevel 1 GOTO REPORT_DATA
    PAUSE
    GOTO USER_SELECTER

:REPORT_DATA
    cd "C:\Program Files\Energy-Report\"
    powercfg -energy
    REN "Energy-Report.html" "energy-report_%SUBFILENAME%.html"
    PAUSE
    GOTO USER_SELECTER

:SAVED_LOGS
    cd "C:\Program Files\Energy-Report\"
    DIR
    PAUSE
    GOTO USER_SELECTER

:DELETE_LOG
    ECHO SET /P Entry_name=log to be erased
    ECHO DEL "C:\%Program Files%\Energy-Report\%Entry_name%"
    PAUSE
    GOTO USER_SELECTER