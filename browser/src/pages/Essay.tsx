import { ContributionSection } from "../components/ContributionSection";
import { PrincipleCardList } from "../components/PrincipleCardList";

// TODO:
export function Essay() {
  return (
    <div className="container space-y-8">
      <h1 className="text-3xl font-bold">Towards a Pluriverse</h1>
      {/* TODO: insert essay body */}
      <PrincipleCardList />
      {/* TODO: insert essay body rest */}
      {/* TODO: insert signatures and contribution mechanism */}
      <ContributionSection />
    </div>
  );
}
