import { Screen } from "@/components/layout";

export const TutorialSection = () => {


    return(
        <Screen id="tutorial" containerClasses="">
            <div className="w-full max-w-full overflow-x-auto white-scroller">
                <div className="table-row">
                    <div className="table-cell">
                        <img className="h-[80vh] w-auto max-w-[unset]" src="/img/INFO-WEB-1.jpg" alt="" />
                    </div>
                    <div className="table-cell">
                        <img className="h-[80vh] w-auto max-w-[unset]" src="/img/INFO-WEB-2.jpg" alt="" />
                    </div>
                    <div className="table-cell">
                        <img className="h-[80vh] w-auto max-w-[unset]" src="/img/INFO-WEB-3.jpg" alt="" />
                    </div>
                </div>
            </div>
        </Screen>
    );
};
